"use client";

import * as React from "react";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
    PaginationState,
    getFilteredRowModel,
    ColumnFiltersState,
} from "@tanstack/react-table";
import { Download, Search, FileText, Link2 } from "lucide-react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Document } from "@/wordpress/collections/documents";

// Fonction pour formater la taille de fichier
function formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

interface CategoryDocumentsTableProps {
    documents: Document[];
    categoryName: string;
    documentCount: number;
}

export function CategoryDocumentsTable({
    documents,
    categoryName,
    documentCount,
}: CategoryDocumentsTableProps) {
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });

    // Définition des colonnes
    const columns: ColumnDef<Document>[] = [
        {
            accessorKey: "title",
            header: "Titre",
            cell: ({ row }) => (
                <div className="max-w-md">
                    <p className="text-sm font-medium break-words whitespace-normal">
                        {row.getValue("title")}
                    </p>
                </div>
            ),
        },
        {
            accessorKey: "type",
            header: "Type",
            cell: ({ row }) => {
                const type = row.getValue("type") as string;
                return (
                    <div className="flex items-center gap-2">
                        {type === "fichier" ? (
                            <>
                                <FileText className="size-4 text-blue-600" />
                                <span className="text-sm">Fichier</span>
                            </>
                        ) : (
                            <>
                                <Link2 className="size-4 text-green-600" />
                                <span className="text-sm">Lien</span>
                            </>
                        )}
                    </div>
                );
            },
        },
        {
            accessorKey: "categories",
            header: "Catégories",
            cell: ({ row }) => {
                const categories = row.getValue("categories") as string[];
                if (!categories || categories.length === 0) {
                    return <span className="text-sm text-muted-foreground">-</span>;
                }
                return (
                    <div className="flex flex-wrap gap-1">
                        {categories.map((category, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                                {category}
                            </Badge>
                        ))}
                    </div>
                );
            },
        },
        {
            id: "size",
            header: "Taille",
            cell: ({ row }) => {
                const doc = row.original;
                if (doc.type === "fichier" && doc.fichier?.size) {
                    return (
                        <span className="text-sm">
                            {formatFileSize(doc.fichier.size)}
                        </span>
                    );
                }
                return <span className="text-sm text-muted-foreground">-</span>;
            },
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const doc = row.original;
                const downloadUrl =
                    doc.type === "fichier" ? doc.fichier?.url : doc.lien;

                if (!downloadUrl) {
                    return (
                        <span className="text-sm text-muted-foreground">
                            Non disponible
                        </span>
                    );
                }

                return (
                    <Button variant="outline" size="sm" asChild>
                        <a
                            href={downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            <Download className="size-4" />
                            Télécharger
                        </a>
                    </Button>
                );
            },
        },
    ];

    const table = useReactTable({
        data: documents,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnFiltersChange: setColumnFilters,
        onPaginationChange: setPagination,
        state: {
            columnFilters,
            pagination,
        },
    });

    return (
        <div className="w-full space-y-4">
            {/* En-tête avec info catégorie */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">{categoryName}</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                        {documentCount} document{documentCount > 1 ? "s" : ""} dans cette
                        catégorie
                    </p>
                </div>

                {/* Barre de recherche */}
                <div className="relative w-full md:w-[30%]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input
                        placeholder="Rechercher dans cette catégorie..."
                        value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("title")?.setFilterValue(event.target.value)
                        }
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Tableau */}
            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader className="bg-blue">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow
                                key={headerGroup.id}
                                className="hover:bg-blue border-blue"
                            >
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id} className="text-white">
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    Aucun document trouvé dans cette catégorie
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination - Affichée uniquement si plus de 10 éléments */}
            {documents.length > 10 && (
                <div className="flex items-center justify-between px-2">
                    <div className="text-sm text-muted-foreground">
                        {table.getFilteredRowModel().rows.length} document(s) affiché(s)
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Précédent
                        </Button>
                        <div className="text-sm">
                            Page {table.getState().pagination.pageIndex + 1} sur{" "}
                            {table.getPageCount()}
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Suivant
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

