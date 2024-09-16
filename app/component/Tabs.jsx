import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Trending from './Trending'
import ThisWeek from "./ThisWeek"
export default function Tab() {
  return (
    <Tabs defaultValue="account" className="w-full px-3 mx-auto container">
      <h1 className='mt-5 font-bold text-3xl' >Trending</h1>
    <TabsList className="mt-5">
      <TabsTrigger value="account">Today</TabsTrigger>
      <TabsTrigger value="password">ThisWeek</TabsTrigger>
    </TabsList>
    <TabsContent value="account" className="w-full mt-5"><Trending /></TabsContent>
    <TabsContent value="password" className="w-full mt-5"><ThisWeek /></TabsContent>
  </Tabs>
  
  )
}
