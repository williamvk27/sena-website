"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoLink = `mailto:orcamento@senaengenharia.com.br?subject=Orçamento: ${encodeURIComponent(formData.service)}&body=${encodeURIComponent(
      `Nome: ${formData.name}
       E-mail: ${formData.email}
       Telefone: ${formData.phone}
       Serviço: ${formData.service}
       Mensagem: ${formData.message}`
    )}`

    window.location.href = mailtoLink
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solicite seu orçamento gratuito e descubra como podemos ajudar seu projeto
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Solicite seu Orçamento</CardTitle>
              </CardHeader>
              <CardContent>
                <form id="formContact" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo
                      </label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Serviço de Interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="energia-solar">Energia Solar</option>
                        <option value="climatizacao">Climatização</option>
                        <option value="manutencao">Manutenção</option>
                        <option value="climatizacao-museologica">Climatização Museológica</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva seu projeto ou necessidade..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-teal-600" />
                  Telefone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">(11) 5026-4182 </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-teal-600" />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">contato@senaengenharia.com.br</p>
                <p className="text-gray-600">orcamento@senaengenharia.com.br</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-teal-600" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">São Paulo - SP</p>
                <p className="text-gray-600">Atendemos todo o Brasil</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-teal-600" />
                  Horário
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-600">Sábado: 8h às 12h</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
