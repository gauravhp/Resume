'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Component() {
  // Email protection function
  const revealEmail = () => {
    const el = document.getElementById('protected-email')
    if (el) el.textContent = 'gaurav.sde@gmail.com'
  }

  const revealPhone = () => {
    const el = document.getElementById('protected-phone')
    if (el) el.textContent = '85005 83083'
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold sm:inline-block">Gaurav Parmar</span>
            </a>
          </div>
          <div className="flex flex-1 items-center space-x-2 justify-end">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/gauravhp" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/parmar-gaurav/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Profile</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Ahmedabad, Gujarat, India
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Software engineer with thorough hands-on experience in all phases of software development lifecycle including
                requirements, design, development, testing, test automation, support and optimising legacy software systems.
              </p>
              <div className="mt-4 flex gap-4">
                <Button variant="outline" onClick={revealEmail}>
                  <Mail className="mr-2 h-4 w-4" />
                  <span id="protected-email">[Click to reveal email]</span>
                </Button>
                <Button variant="outline" onClick={revealPhone}>
                  <Phone className="mr-2 h-4 w-4" />
                  <span id="protected-phone">[Click to reveal phone]</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="experience">
              <Card>
                <CardHeader>
                  <CardTitle>Work Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="font-semibold">Principal Software Engineer - Oracle Corp</h3>
                    <p className="text-sm text-muted-foreground">Jan 2015 - Present</p>
                    <ul className="mt-2 list-disc pl-4 text-sm">
                      <li>Optimised the build time of a legacy build system from 45 hours to 15 hours</li>
                      <li>Created Shared Library Module which is critical and central module to FusionApps product revamp</li>
                      <li>Created critical apps for FusionApps Build Systems Dashboard</li>
                      <li>Mentored juniors and new hires to learn extremely complicated Fusion Build System</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Senior IT Engineer - CMC Ltd (Now TCS)</h3>
                    <p className="text-sm text-muted-foreground">Apr 2012 - Jan 2015</p>
                    <ul className="mt-2 list-disc pl-4 text-sm">
                      <li>Designed Container Freight System for London Container Terminal</li>
                      <li>Implemented second level hibernate cache in South Carolina Ports Authority Portal</li>
                      <li>Created scheduled reports using quartz</li>
                    </ul>
                  </div>
                  {/* Additional experience entries can be added here */}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="education">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <h3 className="font-semibold">B.Tech Computer Science and Engineering</h3>
                    <p className="text-sm">National Institute Of Technology (NIT), Tiruchirappalli</p>
                    <p className="text-sm text-muted-foreground">2001 - 2005</p>
                    <p className="mt-2">CGPA: 7.32/10</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="skills">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Languages & Frameworks</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Java</Badge>
                        <Badge>JavaScript</Badge>
                        <Badge>C++</Badge>
                        <Badge>Python</Badge>
                        <Badge>Spring</Badge>
                        <Badge>Hibernate</Badge>
                        <Badge>AngularJS</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Tools & Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Git</Badge>
                        <Badge variant="outline">Maven</Badge>
                        <Badge variant="outline">Jenkins</Badge>
                        <Badge variant="outline">Docker</Badge>
                        <Badge variant="outline">Oracle</Badge>
                        <Badge variant="outline">MySQL</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
