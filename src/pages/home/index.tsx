import { Heading, Text } from '@ignite-ui/react'
import { Roboto } from '@next/font/google'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './Components/ClaimUsernameForm'

// eslint-disable-next-line no-unused-vars
const roboto = Roboto({
  subsets: ['cyrillic'],
  weight: '100',
})

export default function Home() {
  return (
    <>
      <Container>
        <Hero>
          <Heading size={'4xl'}>Agendamento descomplicado</Heading>
          <Text size={'xl'}>
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
          <ClaimUsernameForm />
        </Hero>
        <Preview>
          <Image
            src={previewImage}
            alt={''}
            height={400}
            quality={100}
            priority
          />
        </Preview>
      </Container>
    </>
  )
}
