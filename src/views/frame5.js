import React, { useEffect, useRef, useState } from 'react'

import { Helmet } from 'react-helmet'

import './frame5.css'

const HERO_MAX_STEP = 3

const Frame5 = (props) => {
  const [heroStep, setHeroStep] = useState(0)
  const [isHeroUnlocked, setIsHeroUnlocked] = useState(false)
  const deltaAccumulatorRef = useRef(0)
  const touchStartYRef = useRef(null)
  const lastStepAtRef = useRef(0)
  const heroStepRef = useRef(0)
  const unlockedRef = useRef(false)

  useEffect(() => {
    heroStepRef.current = heroStep
  }, [heroStep])

  useEffect(() => {
    unlockedRef.current = isHeroUnlocked
  }, [isHeroUnlocked])

  useEffect(() => {
    const shouldCaptureScroll = () => {
      return !unlockedRef.current && window.scrollY < window.innerHeight
    }

    const applyStepProgress = (delta) => {
      const now = Date.now()
      if (now - lastStepAtRef.current < 420) {
        return false
      }

      if (delta > 0) {
        if (heroStepRef.current < HERO_MAX_STEP) {
          lastStepAtRef.current = now
          setHeroStep((prev) => Math.min(HERO_MAX_STEP, prev + 1))
          return true
        }

        setIsHeroUnlocked(true)
        requestAnimationFrame(() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          })
        })
        return false
      }

      if (heroStepRef.current > 0) {
        lastStepAtRef.current = now
        setHeroStep((prev) => Math.max(0, prev - 1))
        return true
      }

      return false
    }

    const handleWheel = (event) => {
      if (!shouldCaptureScroll()) {
        return
      }

      event.preventDefault()
      deltaAccumulatorRef.current += event.deltaY

      if (Math.abs(deltaAccumulatorRef.current) < 70) {
        return
      }

      const delta = deltaAccumulatorRef.current
      deltaAccumulatorRef.current = 0
      applyStepProgress(delta)
    }

    const handleTouchStart = (event) => {
      if (!shouldCaptureScroll()) {
        return
      }

      touchStartYRef.current = event.touches[0]?.clientY ?? null
    }

    const handleTouchMove = (event) => {
      if (!shouldCaptureScroll() || touchStartYRef.current === null) {
        return
      }

      const currentY = event.touches[0]?.clientY
      if (typeof currentY !== 'number') {
        return
      }

      const delta = touchStartYRef.current - currentY
      if (Math.abs(delta) < 34) {
        return
      }

      event.preventDefault()
      touchStartYRef.current = currentY
      applyStepProgress(delta)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  const getRoleClassName = (step) => {
    return `frame5-hero-existing-role ${
      heroStep === step
        ? 'frame5-hero-existing-role-active'
        : 'frame5-hero-existing-role-inactive'
    }`
  }

  return (
    <div className="frame5-container1">
      <Helmet>
        <title>exported project</title>
        <meta property="og:title" content="exported project" />
        <link
          rel="canonical"
          href="https://protfolio-static-lul81t.teleporthq.app/"
        />
        <meta
          property="og:url"
          content="https://protfolio-static-lul81t.teleporthq.app/"
        />
      </Helmet>
      <div className="frame5-thq-frame5-elm">
        <img
          src="/rectangle91127-wyu7-2000w.png"
          alt="Rectangle91127"
          className="frame5-thq-rectangle9-elm"
        />
        <img
          src="/rectangle11128-wql-1300h.png"
          alt="Rectangle11128"
          className="frame5-thq-rectangle1-elm"
        />
        <span className="frame5-thq-text-elm10">
          Hey , I’m
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="frame5-thq-text-elm11">
          <span>
            A jack of all trades is a master of none,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>but oftentimes better than a master of one.</span>
        </span>
        <span className="frame5-thq-text-elm14">Rishi ram</span>
        <img
          src="/chatgptimagemar272026121033am1photoroom11132-v7v-1300h.png"
          alt="ChatGPTImageMar272026121033AM1Photoroom11132"
          className="frame5-thq-chat-gpt-image-mar272026121033am1-photoroom1-elm"
        />
        <span className="frame5-thq-text-elm15">Rishi ram</span>
        <div className="frame5-thq-group1-elm">
          <img
            src="/ellipse11136-zkh-200h.png"
            alt="Ellipse11136"
            className="frame5-thq-ellipse1-elm"
          />
        </div>
        <span className="frame5-thq-text-elm16">Portfolio</span>
        <span className="frame5-thq-text-elm17">contact</span>
        <div className="frame5-thq-group2-elm">
          <span className={`frame5-thq-text-elm18 ${getRoleClassName(2)}`}>
            UIUX Designer
          </span>
          <span className={`frame5-thq-text-elm19 ${getRoleClassName(1)}`}>
            Fullstack Dev
          </span>
          <span className={`frame5-thq-text-elm20 ${getRoleClassName(3)}`}>
            Photographer
          </span>
          <img
            src="/image11143-fgt-200h.png"
            alt="image11143"
            className="frame5-thq-image1-elm"
          />
          <img
            src="/image21144-lddg-200h.png"
            alt="image21144"
            className="frame5-thq-image2-elm"
          />
          <img
            src="/image31145-5y1-200h.png"
            alt="image31145"
            className="frame5-thq-image3-elm"
          />
        </div>
        <span className="frame5-thq-text-elm21">
          I’m a curious and driven learner who enjoys exploring different skills
          rather than limiting myself to just one path. I like building,
          experimenting, and turning ideas into real projects, whether it’s in
          tech or creative work. I believe in understanding a bit of everything,
          adapting quickly, and continuously improving myself. Being a jack of
          all trades isn’t a weakness to me it’s what makes me versatile,
          resourceful, and always ready to take on new challenges.
        </span>
        <div className="frame5-thq-group3-elm">
          <img
            src="/rectangle31148-70a-200w.png"
            alt="Rectangle31148"
            className="frame5-thq-rectangle3-elm"
          />
          <img
            src="/rectangle41149-u3sa-200w.png"
            alt="Rectangle41149"
            className="frame5-thq-rectangle4-elm"
          />
          <img
            src="/rectangle51150-xfym-200w.png"
            alt="Rectangle51150"
            className="frame5-thq-rectangle5-elm"
          />
          <img
            src="/rectangle71151-do3q-200w.png"
            alt="Rectangle71151"
            className="frame5-thq-rectangle7-elm"
          />
          <span className="frame5-thq-text-elm22">Education</span>
          <span className="frame5-thq-text-elm23">Institute</span>
          <span className="frame5-thq-text-elm24">Nature</span>
          <span className="frame5-thq-text-elm25">Work</span>
          <span className="frame5-thq-text-elm26">B.tech CSE</span>
          <span className="frame5-thq-text-elm27">Vel tech university</span>
          <span className="frame5-thq-text-elm28">Versatile</span>
          <span className="frame5-thq-text-elm29">Online</span>
        </div>
        <div className="frame5-thq-group4-elm">
          <img
            src="/ellipse21161-0r1c-500h.png"
            alt="Ellipse21161"
            className="frame5-thq-ellipse2-elm"
          />
          <img
            src="/ellipse31162-emo-200h.png"
            alt="Ellipse31162"
            className="frame5-thq-ellipse3-elm"
          />
        </div>
        <span className="frame5-thq-text-elm30">
          <span>
            A jack of all trades is a master of none,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>but oftentimes better than a master of one.</span>
        </span>
        <img
          src="/image41164-fxec-200h.png"
          alt="image41164"
          className="frame5-thq-image4-elm"
        />
        <img
          src="/rectangle101186-4wn-2000w.png"
          alt="Rectangle101186"
          className="frame5-thq-rectangle10-elm"
        />
        <div className="frame5-thq-smartgloves-elm">
          <img
            src="/ellipse101213-8ehh-800w.png"
            alt="Ellipse101213"
            className="frame5-thq-ellipse10-elm1"
          />
          <img
            src="/airbrushimageextenderphotoroom31214-od4h-1300w.png"
            alt="AirbrushimageextenderPhotoroom31214"
            className="frame5-thq-airbrushimageextender-photoroom3-elm"
          />
          <span className="frame5-thq-text-elm33">
            <span>
              I developed a smart glove system that translates hand gestures
              into audible speech to assist communication for individuals with
              speech or hearing impairments. The glove uses flex sensors to
              detect finger movements, where each bend produces varying
              resistance values corresponding to specific gestures.
            </span>
            <br></br>
            <span>
              These signals are processed using an Arduino Nano, which maps the
              sensor data to predefined words or phrases. The interpreted output
              is then transmitted via a Bluetooth module to a connected device,
              where it is converted into speech in real time.
            </span>
            <br></br>
            <span>
              The system is powered by a compact 3.7V battery, making it
              portable and user-friendly. This project demonstrates the
              integration of embedded systems, sensor-based input, and wireless
              communication to create an assistive technology solution that
              enhances accessibility and inclusivity.
            </span>
          </span>
          <span className="frame5-thq-text-elm37">Smart gloves</span>
        </div>
        <div className="frame5-thq-dummy-elm">
          <span className="frame5-thq-text-elm38">DUMMY</span>
          <img
            src="/ellipse91207-jeg-800h.png"
            alt="Ellipse91207"
            className="frame5-thq-ellipse9-elm"
          />
          <img
            src="/imagepicsartaiimageenhancerphotoroom21210-v77b-1000h.png"
            alt="imagePicsartAiImageEnhancerPhotoroom21210"
            className="frame5-thq-image-picsart-ai-image-enhancer-photoroom2-elm"
          />
          <span className="frame5-thq-text-elm39">
            <span>
              I developed an intelligent robotic arm system designed to identify
              and extract reusable components, such as capacitors, from e-waste.
              The system integrates computer vision and AI to detect specific
              electronic components in real-time using a camera module. Once
              identified, the robotic arm processes the object’s position and
              translates it into precise joint movements.
            </span>
            <br></br>
            <br></br>
            <span>
              The arm operates using mapped motion control, where input
              coordinates are converted into servo angles for the base, arm, and
              elbow, enabling accurate pick-and-place functionality. The system
              is programmed to automatically pick detected capacitors and sort
              them into designated locations, reducing manual effort and
              improving efficiency in e-waste recycling.
            </span>
            <br></br>
            <br></br>
            <span>
              This project combines embedded systems, AI-based object detection,
              and mechanical control, demonstrating practical applications in
              automation, sustainability, and smart recycling solutions.
            </span>
          </span>
          <span className="frame5-thq-text-elm43">Internet of Things</span>
        </div>
        <div className="frame5-thq-skillset-elm">
          <img
            src="/image111188-vopb-200h.png"
            alt="image111188"
            className="frame5-thq-image11-elm"
          />
          <img
            src="/image121189-asao-200h.png"
            alt="image121189"
            className="frame5-thq-image12-elm"
          />
          <img
            src="/image131190-eksj-200h.png"
            alt="image131190"
            className="frame5-thq-image13-elm"
          />
          <img
            src="/image141191-gqa-200h.png"
            alt="image141191"
            className="frame5-thq-image14-elm"
          />
          <img
            src="/image151192-d4ur-200h.png"
            alt="image151192"
            className="frame5-thq-image15-elm"
          />
          <img
            src="/image161193-9u1-200h.png"
            alt="image161193"
            className="frame5-thq-image16-elm"
          />
          <img
            src="/image171194-cscg-200h.png"
            alt="image171194"
            className="frame5-thq-image17-elm"
          />
        </div>
        <span className="frame5-thq-text-elm44">Behind the Designs</span>
        <span className="frame5-thq-text-elm45">Sites</span>
        <span className="frame5-thq-text-elm46">Photography</span>
        <div className="frame5-thq-sightphotos-elm">
          <img
            src="/image51198-qw3d-300h.png"
            alt="image51198"
            className="frame5-thq-image5-elm"
          />
          <img
            src="/image61199-g2pk-300h.png"
            alt="image61199"
            className="frame5-thq-image6-elm"
          />
          <img
            src="/image71200-z1f-300h.png"
            alt="image71200"
            className="frame5-thq-image7-elm"
          />
        </div>
        <div className="frame5-thq-photoasgroup-elm">
          <img
            src="/image81201-o8hd-400h.png"
            alt="image81201"
            className="frame5-thq-image8-elm"
          />
          <img
            src="/image91202-fvlg-300w.png"
            alt="image91202"
            className="frame5-thq-image9-elm"
          />
          <img
            src="/image101203-9ryq-500h.png"
            alt="image101203"
            className="frame5-thq-image10-elm"
          />
          <img
            src="/whatsappimage20260327at13154pm11204-qw6ep-500h.png"
            alt="WhatsAppImage20260327at13154PM11204"
            className="frame5-thq-whats-app-image20260327at13154pm1-elm"
          />
          <img
            src="/img497211205-wojd-300w.png"
            alt="IMG497211205"
            className="frame5-thq-img49721-elm"
          />
        </div>
        <div className="frame5-thq-gazemo-elm">
          <img
            src="/ellipse101218-y93w-800w.png"
            alt="Ellipse101218"
            className="frame5-thq-ellipse10-elm2"
          />
          <img
            src="/imagephotoroom71219-v6k-1200h.png"
            alt="imagePhotoroom71219"
            className="frame5-thq-image-photoroom7-elm"
          />
          <span className="frame5-thq-text-elm47">GAZEMO</span>
          <span className="frame5-thq-text-elm48">
            <span>
              GAZEMO is an intelligent driver safety system designed to detect
              drowsiness and prevent accidents in real time. The system uses a
              camera module (OV7670) to continuously monitor the driver’s eye
              movements and facial patterns. By applying AI-based detection, it
              identifies signs of fatigue such as prolonged eye closure or
              reduced attention.
            </span>
            <br></br>
            <span>
              Once drowsiness is detected, the system triggers an automated
              response mechanism. Instead of relying solely on alerts, GAZEMO
              actively intervenes by gradually reducing the vehicle’s speed,
              even if the accelerator is engaged. This is achieved through a
              motor control system integrated with a push accelerator model,
              ensuring safer deceleration.
            </span>
            <br></br>
            <span>
              The project combines embedded systems, computer vision, and
              automation to create a proactive safety solution. GAZEMO aims to
              reduce road accidents caused by driver fatigue and represents a
              step toward smarter and safer transportation systems.
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Frame5
