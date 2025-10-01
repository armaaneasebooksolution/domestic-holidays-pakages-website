"use client";
import Image from "next/image";

export default function Newsletter() {
  return (
    <section
      className="relative z-10 bg-cover bg-no-repeat py-14"
      style={{
        backgroundImage:
          "url('/assets/img/home7/home7-newsletter-bg.png'), linear-gradient(180deg, #285340 0%, #285340 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl text-center">
            {/* Title */}
            <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
              Subscribe our newsletter to discount 10% all package.
            </h3>

            {/* Form */}
            <form className="mb-4 flex items-center justify-between gap-3 rounded-lg bg-white px-6 py-3 shadow-md">
              <input
                type="email"
                placeholder="Type Your Email Address"
                className="w-full border-none bg-transparent text-base font-medium text-gray-700 outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 flex h-10 max-w-[40px] min-w-[40px] items-center justify-center rounded-full text-white transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M17.9597 0.771505C18.0006 0.669287 18.0107 0.557308 17.9885 0.449451C17.9664 0.341594 17.9131 0.242601 17.8353 0.164747C17.7574 0.0868923 17.6584 0.033599 17.5506 0.0114739C17.4427 -0.0106512 17.3307 -0.000635146 17.2285 0.0402804L0.863689 6.58643H0.862564L0.354081 6.78892C0.257774 6.82734 0.173959 6.89163 0.111895 6.97469C0.0498308 7.05775 0.0119333 7.15635 0.00238854 7.25959C-0.00715624 7.36284 0.0120231 7.46671 0.0578081 7.55974C0.103593 7.65278 0.174202 7.73134 0.261834 7.78676L0.723068 8.07925L0.724193 8.0815L6.34337 11.6566L9.9185 17.2758L9.92075 17.2781L10.2132 17.7393C10.2688 17.8266 10.3474 17.8968 10.4404 17.9423C10.5334 17.9878 10.6371 18.0068 10.7401 17.9972C10.8432 17.9875 10.9416 17.9496 11.0245 17.8876C11.1073 17.8257 11.1715 17.742 11.21 17.6459L17.9597 0.771505ZM15.8977 2.89768L7.46721 11.3281L7.22534 10.9479C7.18103 10.8781 7.12188 10.819 7.0521 10.7747L6.67186 10.5328L15.1023 2.10233L16.4275 1.57248L15.8988 2.89768H15.8977Z"></path>
                </svg>
              </button>
            </form>

            {/* Sub Text */}
            <span className="text-sm text-white/80">
              To get monthly upto 10% best offer in all package.
            </span>
          </div>
        </div>
      </div>

      {/* Left Decoration */}
      <Image
        src="/assets/img/home7/home7-newsletter-section-img1.png"
        alt="Decoration Left"
        width={440}
        height={200}
        className="absolute bottom-0 left-0 z-0 hidden object-cover md:block"
      />

      {/* Right Decoration */}
      <Image
        src="/assets/img/home7/home7-newsletter-section-img2.png"
        alt="Decoration Right"
        width={400}
        height={200}
        className="absolute right-0 bottom-0 z-0 hidden object-cover md:block"
      />
    </section>
  );
}
