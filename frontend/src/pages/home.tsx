import { getUser } from '../api/refactoring/getUser';
import Ability from '../components/ability'
import AboutMe from '../components/aboutMe'
import Footer from '../components/footer';
import Hero from '../components/hero'
import Navbar from '../components/navBar'

const user = await getUser()
console.log('user',user)

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Ability />
      <Footer />
    </>
  );
}
