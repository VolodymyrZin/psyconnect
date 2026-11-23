import HeroSection from './components/HomePage/HeroSection/HeroSection';
import StatsBar from './components/HomePage/StatsBar/StatsBar';
import css from './page.module.css';
export default function HomePage() {
  return (
    <main className={`container ${css.homePageContainer}`}>
      <HeroSection />
      <StatsBar />
    </main>
  );
}
