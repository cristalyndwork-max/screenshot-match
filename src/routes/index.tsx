import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowDown, Heart, Sparkles, Leaf, Menu, X, ShieldCheck, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import room from "@/assets/treatment-room.asset.json";
import consultation from "@/assets/consultation.asset.json";
import lounge from "@/assets/lounge.asset.json";

const description = "Gentle, thoughtful dental care at LumiSmile. Explore care for your everyday dental health, smile confidence, and a comfortable first visit.";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "LumiSmile Dental Care | A little care. A brighter smile." },
    { name: "description", content: description },
    { property: "og:title", content: "LumiSmile Dental Care | A little care. A brighter smile." },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: room.url },
    { name: "twitter:image", content: room.url },
  ] }),
  component: Index,
});

const faqs = [
  { question: "What if I’m nervous about visiting the dentist?", answer: "You’re not alone. Tell your dental team how you’re feeling before your appointment. Ask them to explain each step, discuss comfort options, and agree on a signal if you need a break." },
  { question: "What should I bring to my first visit?", answer: "Bring any recent dental records or X-rays you have, a list of current medications, and any insurance information. It can also help to write down questions you want to ask." },
  { question: "How often should I have a dental check-up?", answer: "The right interval depends on your individual oral health. Your dentist can recommend a check-up schedule based on your teeth, gums, and any ongoing concerns." },
  { question: "How can I arrange a visit?", answer: "Online booking is not available yet. Please contact LumiSmile directly to ask about appointment availability. Booking contact details will be added when confirmed." },
];
const careOptions = [
  { icon: ShieldCheck, label: "01 / Everyday", title: "A healthy foundation", copy: "Make room for your everyday dental health, with conversations about keeping your teeth and gums feeling their best." },
  { icon: Sparkles, label: "02 / Confidence", title: "A smile that feels like you", copy: "Talk through what you’d like to change, explore your options, and take the next step at your own pace." },
  { icon: Heart, label: "03 / Peace of mind", title: "A little extra reassurance", copy: "New to the dentist, or feeling a little nervous? There’s always room to ask questions and share how you feel." },
];
const steps = [
  { title: "Tell us about you", copy: "Bring any relevant dental records and make a note of medications, concerns, or questions you’d like to discuss." },
  { title: "Make yourself comfortable", copy: "Let the team know if you’re feeling nervous or need a pause. Your comfort is part of the conversation." },
  { title: "Take it one step at a time", copy: "Ask about your options, timing, and costs before deciding what comes next. There’s no need to rush your questions." },
];

function Wordmark() {
  return <a href="#top" className="wordmark" aria-label="LumiSmile Dental Care home"><span className="wordmark-name">LumiSmile<span className="text-primary">.</span></span><span className="wordmark-caption">Dental Care</span></a>;
}
function BookingButton({ children = "Book a visit" }: { children?: React.ReactNode }) {
  return <Button asChild variant="appointment"><a href="#ls-booking-info">{children}<ArrowRight aria-hidden="true" /></a></Button>;
}
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div id="top">
      <header className="site-header">
        <div className="site-width header-inner">
          <Wordmark />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a className="nav-link" href="#care">Our care</a><a className="nav-link" href="#first-visit">Your first visit</a><a className="nav-link" href="#faqs">FAQs</a>
            <BookingButton />
            <Button className="mobile-menu-button" variant="ghost" size="icon" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </nav>
        </div>
        {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{[["Our care", "#care"], ["Your first visit", "#first-visit"], ["FAQs", "#faqs"]].map(([label, href]) => <a key={href} className="nav-link" href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
      </header>
      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <img className="hero-photo" src={room.url} alt="A bright, welcoming LumiSmile dental treatment room" fetchPriority="high" />
          <div className="site-width hero-content">
            <div className="eyebrow">Welcome to LumiSmile Dental Care</div>
            <h1 id="hero-heading">Gentle dental care.<br />A healthier smile.<br /><em>A little more you.</em></h1>
            <p className="hero-copy">Thoughtful dental care, a gentle touch, and a little more time for you. Because feeling good about your smile starts with feeling at ease.</p>
            <div className="hero-actions"><BookingButton>Book your first visit</BookingButton><Button asChild variant="quiet"><a href="#care">Get to know us<ArrowDown aria-hidden="true" /></a></Button></div>
            <p className="care-note"><Heart size={13} aria-hidden="true" />A warmer welcome. A calmer kind of care.</p>
          </div>
        </section>
        <div className="values-band"><div className="site-width values-inner"><div className="value"><Heart />Care that listens</div><div className="value"><Leaf />Comfort comes first</div><div className="value"><Sparkles />Every smile is welcome</div></div></div>
        <section className="section" id="care" aria-labelledby="relate-heading">
          <div className="site-width relate-grid">
            <div className="photo-pair"><img className="consultation-photo" src={consultation.url} alt="A dental professional taking time to talk with a patient" loading="lazy" /><img className="lounge-photo" src={lounge.url} alt="A comfortable, light-filled clinic lounge" loading="lazy" /></div>
            <div className="relate-copy"><div className="eyebrow">A little care. A brighter smile.</div><h2 id="relate-heading" className="section-heading">You deserve to feel<br /><em>at ease.</em></h2><p className="body-copy">A new place can feel unfamiliar. Perhaps you’re feeling nervous, have questions about your smile, or simply don’t know where to start.</p><p className="body-copy">There’s room for all of that here. Share your concerns, talk through your options, and take the next step at your own pace. Good care begins with being heard.</p><Button asChild variant="quiet" className="text-cta"><a href="#first-visit">Let’s start with a hello<ArrowRight /></a></Button></div>
          </div>
        </section>
        <section className="section care-section" aria-labelledby="care-heading"><div className="site-width"><div className="section-intro"><div><div className="eyebrow">Your smile, your way</div><h2 id="care-heading" className="section-heading">Good care.<br /><em>For every smile.</em></h2></div><p className="body-copy">From the little everyday things to a fresh start, your smile deserves care that feels right for you.</p></div><div className="care-grid">{careOptions.map(({ icon: Icon, label, title, copy }) => <article className="care-item" key={label}><div className="care-item-top"><Icon aria-hidden="true" /><span className="item-label">{label}</span></div><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
        <section className="section" id="first-visit" aria-labelledby="visit-heading"><div className="site-width visit-layout"><div className="visit-intro"><div className="eyebrow">Your first visit</div><h2 id="visit-heading" className="section-heading">Let’s start with<br /><em>a hello.</em></h2><p className="body-copy">A little preparation can help you arrive feeling more comfortable. We’ll take it one step at a time.</p><div className="text-cta"><BookingButton>Book your first visit</BookingButton></div></div><div>{steps.map((step, index) => <article className="step" key={step.title}><span className="step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></article>)}</div></div></section>
        <section className="section faq-section" id="faqs" aria-labelledby="faq-heading"><div className="site-width faq-layout"><div><div className="eyebrow">A little reassurance</div><h2 className="section-heading" id="faq-heading">Good questions.<br /><em>Clear answers.</em></h2><p className="body-copy">A little clarity can make all the difference.</p></div><Accordion type="single" collapsible defaultValue="question-0">{faqs.map((faq, index) => <AccordionItem key={faq.question} value={`question-${index}`}><AccordionTrigger className="faq-trigger">{faq.question}</AccordionTrigger><AccordionContent className="faq-answer">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>
        <section className="appointment" id="appointment" aria-labelledby="appointment-heading"><div className="site-width"><div className="eyebrow"><Smile size={15} aria-hidden="true" />A little time for you</div><h2 className="section-heading" id="appointment-heading">Your next chapter<br />starts with <em>a smile.</em></h2><p className="body-copy">A little time for your teeth. A little care for you.</p><BookingButton /><p id="ls-booking-info" className="booking-notice" tabIndex={-1}>Online booking is not available yet. Booking contact details will be added when confirmed.</p></div></section>
      </main>
      <footer className="footer"><div className="site-width footer-inner"><Wordmark /><span className="footer-note">A warmer welcome. A calmer kind of care.</span><a href="#top" className="nav-link">Back to top ↑</a></div></footer>
    </div>
  );
}