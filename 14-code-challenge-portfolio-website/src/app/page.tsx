"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import Section from "@/components/section";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <main
      className={`relative w-full min-h-[calc(100vh-64px)] flex flex-col justify-center items-center font-sans transition-colors duration-500 ease-in-out ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <Section>
        {/* Name & Profession */}
        <h2 className="text-center text-2xl sm-text-3xl font-semibold mb-3">
          Andhika Arif Gilang Rona Putra — Full-Stack Web Developer
        </h2>

        {/* Foto */}
        <div className="w-full flex justify-center">
          <div className="relative w-[200px] h-[200px] mb-6 mt-6 rounded-full overflow-hidden shadow-lg">
            <Image
              src={
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBUSEBMVFRUVEBAQFQ8VDxAVDw8QFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAPkAygMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAgMEBQYABwj/xABAEAABAwIEAwUFBQYEBwAAAAABAAIRAwQFEiExQVFxBhMiYYEykaGx0RRCUsHwB2JykrLhFSMzghZDU2OiwvH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A82XJULoQIRhKhdCBMLoSoXQgRC6E5C6EDcLoTmVHKgbhCE7lQcABJQNwuhJNw3+2iFS4j7pQLhAhIZdtO4IT4g7IGoXQnS1JhA3CEJyEIQNwuS4QIQJQhKhBAmEIS4XQgmQuIS8q7KgbhdCcyrsqBuEcqcyo5UDeVdlToalBqBkNSg1O5UQxBGrvyiYk8BzKiPovdv4jwgGB5KTd5i4Nb71qexuA97VGaIHiJjWeqDOMw57myGHY7t2PDgmLi0I8PUjyg7e4r362wqiWwGgDbZVmNdkaRGZrY/P9Sg8Lr0NA6IM5T/EPrqmNWOnymPJa3tDgL6YcAJaC1wI3Dh9fyWfu6YJAjYOmfMDT3oFUnBzQQiWqDh7srwPxRp5lWpagjEIQni1IIQNkJMJ0hAtQNEIQnC1DKgbhdCcyoQgnwjCXC4hA3CMJYaiGoEBqIanA1KDUDYalZU4Go5UDeVdCdyq8p9mnvtX1Bm71rmk0YEGk7QuB3MHfoRwQUOGWmcknr9B8QvQeyVMMd6R1P1WawW3Je0D8UE+QP69621HKw6Q0R7R0g9fegvbR5IMSeG2ilXV63uzJ1AVXh93QmG1Rm3Dcw1TeK4hRc0wTPEcvVBT3/d1Q4EcCvPcVwoEks1OvotRf1MjHGTOrYO+Y8lnmPeGF5EAkwTtpoIQZGrTdTqiRs5unQq4e3U9VV3JNSoY5/GVbuCBghILU+WpJagYLUktTxahlQM5V2VPZUMqBnKhlT+VdlQS4XQnA1HKgbDUoNTgaiAgQGpQalwiAgSGo5UsBFA7h9uH1ACCWgPqOA3LGNLyB5kNj1Wp7P9oBcVWso27xVFJ2aKn+WygCPaB2Mnc8zzWawy67msypr4XaxvB0MehK1H/FVn4m24LXvpvYQKYbo1pyy7j5DhJQTMDwxoD6kRncS3+Ekx8IVZ2vZUgDXL5T8hqSpeFYo7uxP3ePAwVa/wCLW1ZupAcBtwOvz80Hj91iPcuAZVcdvCdCI5HVXFl2xbGSozNtD/vf3S+1mB94/NSh87AN8Y8pHtDdZ637JYh3gabeoCTpLdD5zsAg2tjidGs894fC0Z3Hm95gN9zTKqcX7RU3ZWtaMrWjwAQ0k8NP1os3jVvXsqr6FUjNoTlILeI+qq+/Ljrpw2KDUYFTbUFes4RlAgAeAvd4WiSd/ETEfdSi1KweydTs87naVa0tZO+QEZo9Tr0S4QMFqQWqSWpDmoI5aklqfLUMqBmF2VO5UQ1AzlRyJ7KlZEDuVGE5lXZUCQEYSwEYQIASoSoRhAmEIS4QhAmE7hVoXV3PI0awAfxGdvNIhOf4kKdMtmDtPEHQ/o+SCTdX/dktOoPADbkRz3VbRqZqkHMZ5bH+yqqlKrUcTMDqMs8louzZpUxnqCQJEcXOnQINbh9INYCIYDAzu9t3TyWmtnQBJk6b8gsVWuaZaauc96Ae7aSMlN/AAbbhUVp+0S5Odlw1uaHNzAQ+Dp0PL1QZjtncd/e1n/vZR0H/ANVO0QNlJvq4qVXPH3nSn8LthVr06ROUPe1pcBJa3iQPISUFzh7ybelPAVPcXn9eqdhPXGTMRSblpjwsaTJawbSeJ4k8yU3CAQgWpwBKyoI5ahlUgsQyII+VcGp/IjkQMhqVlTrWJeRB0LoThahCBICMJbWToEruT8vigbAXQnRRKQ5sIEwhCUhCAQqnHLZ7ctQTldoY4OmNfRW0KypUW1bctOoLXDymdEGKfeDLlBPD+3x4KXSun902nTBzF2g58lSvpFro10MRvqFZ0C7Ox3L2QPigs6RumN8VvmjUgVPFAG+XdUGKXDKzpPgIGXJxHWVc4hXutSQ8CJJA5BZ6tX7z2veRqgZawtKv+xlAPrVHkwWUKzweE5Yjr4ln4jQHRbfDrdltSLWGXVKbGudIhoMOcBG+oAnqgTC6EqEYQABOtag1qeY1Aju13dqUyml9ygg92u7tTe5ShQQQhTRyKcaCR3SCGAjlS2tT2TRBGiECTzPvUhzEy5qBIJ5/FAowg4gCTp5oBCZuLhjB4j6cT6KBe4uBpT/n4egVJdXB1JMk8UFo2vVu6woUfCDJcfwsHtOP05kLc2dBtOWj2WgNA/dAhUn7PrHJburu9qq6B5U2af1ZvcFfx7XKZQef49Ry3Lo0BOcbaFOUqrS1oAGh5bcd5Tnatvja70VE5726g8CEGmusSLKcTuNQOI4/L4KkvXtqN1EGI8/VQ33JJknX5pLq5JQMZYJHJTbO/q0vZMj8LtW/29FHa1OAINDZYtTqaO8DuRPhPQqzDVjgxWWH4g+nofE38J3HQoNG1qkU2JmzqsqCWnqOLeoU+jTQKo0lMp20pdvQVzZ2koKf7GlsslqKeGzwTzMLjggyNS0TH2Zay4sI4KvNqEGJaU6HJgI5kDrnphxSajwBJMAbk7BUWJY0CC2lxBBfqP5fqgs7vEKdPcyfwjf15Kgvb99U66Dg0bevNQWulJqO4TEoF1aoaojiXanrCL2RAOv3j58gr7sfgjru6Y1zT3YPeVHRA7tvAHzMD1QekYLhxZaUWHSKLJPnEn5rjT0PAakk7Qr+7Etys5Qqq6snkBo0Eajn5IMT2gte8plw+7qOiyLtl6pc4VlaQ7ZzSIXl9/SyVHN5EoILguARekgoHWpYTbU60IHGKRTCYpqdb0xxQP2bi0y0kHmFrMKvWv0f4Tzjwu68j8OiztvTAVxYMCDZWlutFhtpss1g9wWgDccjw6HgtrhJaYg+h+qC0trJoGqfNu3knQuQVt5hwIKpThw5LWEKG6kJQeCFQr3EqVLRxk/hGrvXkq3Gsayyykddi/l5D6rNueTqUFhf4lUrHXRs6NG3rzUQg+qQ0pYKAU+aXllIG/XVOhBoewvZn7dc5qg/yKeWpU5VHfdpjrEny6r2kUWAQGgACAANABsvMP2TX2W4qUDtUp52jhnpnb1a4/yr1GoTwQMvtuIUQ3GR0OVi0TuVAxCiCNECLsMqtMHXrovO+2OAloNdo04jkea0txWdSdImOPmrtjKd1Qc0+zl16ngg8HcxNQt9iXYWuSXUtROjZ1hZa9wW4pEh9NwjyQV7E8wE6BIbQdMQZ5QVtsKwMW9nVuao8XdODAful3hB95CDI06ZVhSEBRmu0HonmuQSGvI0Cu8P0ACztCrL54frVXdrVQazDqsQtbhV4BC86oXcK6tMSjig9Xs7oOG6lBYDD8Xgbq1p49GsoNQ94A1VW651PUqrrYwHtzNOo9pvLzHl8lXnEkHzY90oApEriUD4K7Omi7RcwSUDzTPzTrHJrN8kqjt6BBbYDf8A2a5pVvwVGk/wHR//AIkr3wvBHy8185tXtfY6/wC/saLifE1vdOPHNT8PxAB9UFy+rH0UC7udCnqzhPv4KmxGrofyQVWK3gWg7Ium3c7m+Pcsjc27qh1Gmy3eC0RSt2tAjSY5ygmscFCu7RrzqBvqphQB5oKo4PS4ME84VB25/wAmyLOD6lNoHQl//qtoR5Lz/wDapcQKFPzqVD6ZWt+bkGGpldXqwOqQHKPWfLgAgsLJ2hKsKNaFV0nZWgJ4VUFw2526qdQu9VnW1tR1UqhX4oNZRxGOKXVxbTdZgXSZqXaDTU8ac1wIO3uPMHyKshilA697E65cpOXynisEblD7UgyErpSZQlAuU5T2TLU88xogUwp6kdlHaUthJQS5Xof7LMQOStRJ2c2s3/cMro/lb715xn0V/wBhL/ur1muj2vpH1Ej4tHvQet1RP1lQLqgOakVbkcFAu7r9Sgh13tb0WhwytnpNM7abrBYpemdJ9y0fZSs82+s+0YQaZj9E40qEyqeKebVQS54ryL9pd3nvy3/p06TPUgvP9a9SdW9fkvEe0lz3t5Xfzr1B6NOUfBqCCXJFuNc3uQqnTqUM8e5BIDtEo1YCiGpwRe/RBKbW09CpNOtCqGVFI71BYiv9Uz36iPqwI5/JN96gnit8im++UXvdOvySM6CulcUpzeISEC6ZS5TdPdKCBwLg6EiUUDjXJ61uTTe14+69ruuUzHwUYBKlB7Ky9a5oI1kA78CFFurxsLE4fjRbRa2dQ0N92gSK+LuKC3xO+HArSdk8XAoNB5nruvMq1dztyrHB70s0n0Qet/aQ7Y/FD7QPz0WOs8Sed1M/xE7BBoK1+GgngBMdF4pUq5iXcSS49SZXoOJ3h7moeVN/yK83cgNZ+oHqg93yTTj4kKjtUCy9E1EzK6UDrXJwP4/oqOClSUC3VJXApsN93NcXckDhculNyulA2NOiJCI5IRCBKUEkooFBFBEICFw3QXAoHqT496kB3NQC5cXniUE19QcFJs2va3vfuh2Q+XJRbGwrVTFOm4/vQQwf7jot3hPZfNR7t1SAZzeGQ4+SCnpYk0BOjFR5dFRYtbV7SoadVugPhfByvbwLXfkon2wcQQgv8RxEOpvE7tI94WaaUt9dp2TTuKBudfVBx1QC4oOXIIoCE4xyaRCBx7p6fNJHkguQGQukoj3Lo6oElcSiElyAFcFxQagWESUFxQdK4JKKBdIAvaDsXNB6EgFerWtCxoCGUaYI45Gl59TqvJSY15ar1bAsGJY2pVeHZmhwbrGoBQM3mJA7c9p2T9riWRrSDOhkqReYfQOhYN9xI26I21hbw2GabZc2hPPzQQ73FCWQ5ocDuHNBafQrMXWF2tWSG90f3PZ/lOnuhbrEqdMQC0RG0clXVcIoVATOUeSDzO6szTduHDmPzCYqLVdosFpUaTntcXEFsSebgDp6rKVSgbCJSUUHIpKKAohBFqAohBGUCphCSgunzQcECuAXEIElAIlLtqRe8NHGfgCfyQBculBAEQgiEAeNCvWrC+b3FI/9qnrP7oXkxWywi8Bt6YJ2Zl90hBc4liRJgO4c01bYiYEnUKnuXjgULQgDM8zrsg0Ne5c4l3QDoEj7aANVU4higgBpUB1zpugX2iuw6kQDxb8wsrUKssQr5hHmFWP3QBEIIhBy5ELkARagiEClyErggMLo810rpQFApQSXIElKo1XMcHNMETBgaSI49UkoBAtBEIFACuAXItQGFedmsOfcSA6GsIn11VE5a3sP/p1v42f0lBIxLs+Wjw1Qev1SrfBDkDX1BrqImT6qZiPDoi7Zv8IQI/4cosaSXFx4TwVJiGGumGHXktW/2f1zVH/zvRBmLvDqtMZqmmsRxVe5aztN/p+oWTKAIhBKCDly5cg4oIoFBwSkkLkChCMhJalIP//Z"
              }
              alt={"Foto menggunakan baju hitam"}
              fill
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-center mb-6">
          I build responsive, modern web applications with clean UI and
          optimized performance
        </p>

        {/* CTA */}
        <div className="flex gap-4 mt-3 justify-center items-center">
          <Link
            href={"./projects"}
            className="text-center px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 hover:scale-110 transition"
          >
            View My Project
          </Link>
          <Link
            href={"./contact"}
            className="text-center px-4 py-2 rounded-md bg-gray-500 text-white hover:bg-gray-600 hover:scale-110 transition"
          >
            Contact Me
          </Link>
        </div>
      </Section>
    </main>
  );
}
