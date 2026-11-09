
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#292522] text-[#eee8dc]">


{/* ARTIST INTRODUCTION */}
<section className="px-5 pb-20 pt-36 md:px-12">

  {/* ARTIST PHOTOGRAPH */}
    <div className="relative mx-auto w-full max-w-[1100px]">
      <Image
        src="/images/about.JPG"
        alt="Srijith Poosarla performing on the mandolin"
        width={1600}
        height={900}
        priority
        className="h-auto w-full object-cover"
          style={{
            maskImage: `
              linear-gradient(to bottom, transparent 0%, black 18%, black 65%, transparent 100%),
              linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)
            `,
            WebkitMaskImage: `
              linear-gradient(to bottom, transparent 0%, black 18%, black 65%, transparent 100%),
              linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
      />
    </div>

  {/* OVERLAPPING BIOGRAPHY PANEL */}
  <div className="relative z-10 mx-auto -mt-16 w-[92%] max-w-[850px] border border-[#b99a63]/30 bg-[#292522] px-6 py-10 shadow-2xl md:-mt-24 md:px-16 md:py-14">

    <div className="text-center">
      <h1 className="mt-4 font-serif text-4xl md:text-6xl">
        Srijith Poosarla
      </h1>

      <p className="mt-4 text-[11px] tracking-[0.4em] text-[#c6a46a]">
        CARNATIC MANDOLIN
      </p>
    </div>

    <div className="mx-auto mt-9 max-w-2xl space-y-5 text-center text-sm leading-8 text-[#d0c5b8] md:text-base">
      <p>
        Srijith Poosarla is a Carnatic mandolinist from Chennai. 
        A student of the legendary Vidwan U. Rajesh, he strives to carry forward the traditions of this style with sincerity. 
        Rooted in raga but unbound by genre, he has earned appreciation for a sound that brings classical, folk and contemporary music into one sonic identity.
      </p>
       <h2 className="mb-3 font-serif text-2xl text-[#c6a46a]">
      Collaborations & Venues
      </h2>
      <p>
        Srijith has performed at some of the country’s most significant stages, including the BRICS Foreign Ministers’ Summit at Bharat Mandapam, the India Habitat Centre and IIT Delhi.
        In Chennai, he performs for respected organisations and sabhas such as Sri Parthasarathy Swami Sabha, the Indian Fine Arts Society (including its Margazhi season) and Carnatica, among others.
        He also performs with a range of ensembles: the percussion ensemble Tal Fry, Alankār, a 45-piece Indian choir where he served as instrumentalist head, and Half Ka Double, an emerging fusion band where he is the lead mandolinist. 
        He has also collaborated with the band Thisram on wedding performances.
      </p>

      <h2 className="mb-3 font-serif text-2xl text-[#c6a46a]">
      Learning & Lineage
      </h2>
      <p>
        Srijith belongs to the U. Srinivas bani of mandolin music and learns under the legendary Vidwan U. Rajesh. His earlier training has been under Guru R. Balakrishna, a disciple of Mandolin U.P. Raju.
        Music was part of his family long before the mandolin. His grandmother, Mrs P. Rathna Raju, holds a Diploma in Veena from the Dwaram Narsingarao Memorial Music College in Vizianagaram, where she learnt under Guru Chembolu Venkatashastri and Evaturi Vijayeshwarrao.
      </p>

      <h2 className="mb-3 font-serif text-2xl text-[#c6a46a]">
      Collaborations With Other Styles & Instruments
      </h2>
      <p>
        Srijith excels in conversation with other art forms.
        He has performed for Kathak, Bharatanatyam, Kuchipudi and Odissi, and alongside spoken word poetry.
        He has played alongside the mukhaveena, sitar, veena, violin, guitar, tabla, pakhawaj, mridangam, ghatam, kanjira, morsing, bass, keys and drums, among many others.
        His music travels across Tamil, Telugu, Kannada, Malayalam, Hindi, Bengali, Marathi and Kashmiri, and more, so a collaboration can begin wherever the other artist’s work does.
        The shared thread is expression. He builds the music around the other artist, not on top of them.
      </p>

      <h2 className="mb-3 font-serif text-2xl text-[#c6a46a]">
      Academic Qualifications & Other Interests
      </h2>
      <p>
        Srijith graduated from Ashoka University with a Bachelor of Science (Honours) in Biology and a minor in Psychology. 
        The two fields sit close to his music: how the mind responds to rhythm, structure and emotion, and why a raga can change the mood of a room.
        He has taken this interest to the stage, performing at neuroscience and sleep science conferences and opening talks that bring music and science together.
      </p>
    </div>

  </div>
</section>
    </main>
  );
}
