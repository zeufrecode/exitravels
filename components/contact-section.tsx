import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BesoinDeNous() {
  return (
    <section className="bg-accent/5 py-20 text-center rounded-2xl my-16">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          Besoin de nous ?
        </h2>
        <p className="text-lg text-muted-foreground">
          Que ce soit pour un voyage, un visa ou un séjour touristique, notre
          équipe est prête à vous accompagner à chaque étape.
        </p>
        <Link href="/contact">
         <button
  className="bg-gradient-to-r from-[#FF781D] to-[#FF9B4D] 
             hover:from-[#FF9B4D] hover:to-[#FF781D] 
             text-white font-semibold text-lg px-10 py-4 rounded-full 
             shadow-lg hover:shadow-2xl transition-all duration-300 
             tracking-wide uppercase"
>
  Contactez-nous
</button>
        </Link>
      </div>
    </section>
  )
}
