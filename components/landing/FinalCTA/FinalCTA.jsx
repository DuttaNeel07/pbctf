import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRetroSound } from '../hooks/useRetroSound';
import { useAuth } from '@/hooks/use-auth';
import './FinalCTA.css';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const { isAuthenticated } = useAuth();
  const { playHover, playClick } = useRetroSound();

  useGSAP(() => {
    const headline = sectionRef.current.querySelector('.final-cta__headline');
    const text = sectionRef.current.querySelector('.final-cta__text');
    const actions = sectionRef.current.querySelector('.final-cta__actions');

    gsap.from([headline, text, actions], {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section id="register" className="section final-cta" ref={sectionRef}>
      <div className="container">
        <h2 className="final-cta__headline">
          Ready To Enter The Arena?
        </h2>
        <p className="final-cta__text">
          Registrations are now closed. If you have already registered, log in
          to your dashboard to track your team&apos;s status.
        </p>
        <div className="final-cta__actions">
          <a
            href={isAuthenticated ? '/dashboard' : '/login'}
            className={`btn ${isAuthenticated ? 'btn--secondary' : 'btn--primary'}`}
            id="cta-register-now"
            onMouseEnter={playHover}
            onClick={playClick}
          >
            {isAuthenticated ? (
              <>
                Access Granted
                <svg className="btn__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            ) : (
              'Login'
            )}
          </a>

        </div>
      </div>
    </section>
  );
}
