import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from 'lucide-react'
import { cn } from '../utils/cn'

interface FormValues {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'Bankside, Southwark, London SE1',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '0800 123 4567',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'hello@omniman.co.uk',
  },
  {
