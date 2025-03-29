'use client'
import { useState } from "react";
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
  color,
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

  const bgColor = color === "pink" ? "bg-pink-200" : "bg-[#1a2f4b]";
  const textColor = color === "pink" ? "text-pink-500" : "text-white";

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
      setShowSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
        setShowSuccess(false);
        setFormData({
          eventName: title,
          fullName: "",
          email: "",
          phone: "",
          profession: "",
        });
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
        className="bg-white rounded-lg p-6 flex items-center space-x-4 h-full"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <motion.div
          className={`${bgColor} w-12 h-12 rounded-full flex-shrink-0`}
          variants={fadeIn}
        ></motion.div>
        <div className="space-y-4">
          <motion.div
            className="flex-grow w-[50%]"
            variants={fadeInUp}
          >
            <h2 className="text-lg font-bold text-[#1a2f4b] leading-tight">
              {title}
            </h2>
          </motion.div>
          <motion.p
            className="text-[#1a2f4b] underline"
            variants={fadeInUp}
          >
            {location}
          </motion.p>

        </div>

        <motion.div
          className="flex flex-col items-end space-y-2"
          variants={fadeInUp}
        >
          <motion.div
            className={`${bgColor} ${textColor} text-[10px] font-semibold px-3 text-center py-2 rounded w-[150px]`}
            variants={fadeIn}
          >
            {date}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Button
              variant={"outline"}
              className="mt-8 bg-transparent shadow-none flex items-center gap-4 text-[11px] border-blue"
              onClick={() => setIsOpen(true)}
            >
              <span>S&apos;inscrire</span> <ArrowRight />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Inscription à l'événement</DialogTitle>
            <DialogDescription>
              Remplissez le formulaire ci-dessous pour vous inscrire à l'événement.
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
                <Label htmlFor="eventName">Nom de l'événement</Label>
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
