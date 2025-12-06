'use client'
import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

const EventCard: React.FC<any> = ({
  img,
  title,
  location,
  date,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    eventName: title,
    fullName: "",
    email: "",
    phone: "",
    profession: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
    };
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Le nom complet est requis";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est requis";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      setShowSuccess(true);
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
        setShowSuccess(false);
        setFormData({
          eventName: title,
          fullName: "",
          email: "",
          phone: "",
          profession: "",
        });
        timeoutRef.current = null;
      }, 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <motion.div
        className="bg-white rounded-lg p-3 flex flex-wrap items-center space-x-4 space-y-4 h-full relative overflow-hidden"
        style={{
          backgroundImage: img ? `url(${img})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        {img && (
          <div className="absolute inset-0 bg-black/40 w-full h-full"></div>
        )}

        <div className="relative z-10 w-full">
          <div className="space-y-2 w-full">
            <motion.div
              className="flex-grow"
              variants={fadeInUp}
            >
              <h2 className={`text-lg font-bold leading-tight ${img ? 'text-white' : 'text-[#1a2f4b]'}`}>
                {title}
              </h2>
            </motion.div>
            <motion.p
              className={`underline mb-2 ${img ? 'text-gray-200' : 'text-[#1a2f4b]'}`}
              variants={fadeInUp}
            >
              {location}
            </motion.p>
          </div>

          <motion.div
            className="space-y-2 w-full grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={fadeInUp}
          >
            <motion.div
              className={`bg-blue text-white text-[10px] font-semibold px-3 text-center py-2 rounded`}
              variants={fadeIn}
            >
              {date}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button
                variant={"outline"}
                className={`shadow-none flex w-full md:items-center gap-4 text-[11px] ${
                  img 
                    ? 'bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50' 
                    : 'bg-transparent border-blue'
                }`}
                onClick={() => setIsOpen(true)}
              >
                <span>S&apos;inscrire</span> <ArrowRight />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Inscription à l&apos;événement</DialogTitle>
            <DialogDescription>
              Remplissez le formulaire ci-dessous pour vous inscrire à l&apos;événement.
            </DialogDescription>
          </DialogHeader>
          {showSuccess ? (
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-green-600 font-semibold">Merci de vous être inscrit !</p>
              <p className="text-sm text-gray-500 mt-2">Le formulaire se fermera automatiquement...</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                <Label htmlFor="eventName">Nom de l&apos;événement</Label>
                <Input
                  id="eventName"
                  name="eventName"
                  value={formData.eventName}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fullName">Noms complets</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? "border-red-500" : ""}
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Adresse email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="profession">Profession</Label>
                <Input
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full">
                Valider
              </Button>
            </motion.form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventCard;
