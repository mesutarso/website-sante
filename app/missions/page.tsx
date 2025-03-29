import React from 'react'
import { Container, Section } from "@/components/craft";
import Attributions from '@/components/ministre/attributions';
import BilateralGrid from '@/components/cooperation/bilateral';

function page() {
  return (
    <div className="bg-[#f6f8fc]">
    <Section>
      <Container>
        <Attributions />
      </Container>
    </Section>
      <BilateralGrid />
  </div>
  )
}

export default page
