import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const FAQ = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-8 py-20">
      <div className="flex flex-col md:flex-col lg:flex-row gap-12 items-center justify-center mt-5">
        <div className="flex-1">
          <div
            className="w-full h-[36rem]"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <img className="w-full h-full rounded-xl" src="FAQ.jpg" alt="" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-[#0b996f] text-5xl font-semibold py-7">
            Stringent Safety Measures <br /> for Peace of Mind
          </h1>
          <p className="text-gray-600 pb-5">
            Have queries about our services? Find clarity and valuable
            information in our FAQ section, designed to provide you with a
            seamless experience.
          </p>
          <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                How do I book a ride?
              </div>
              <div className="collapse-content">
                <p>
                  Booking your ride is a breeze! Navigate our user-friendly
                  platform, input your destination, confirm pick-up details,
                  choose a preferred payment method, and voilà – you're ready to
                  embark on your journey.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                What payment methods do you accept?
              </div>
              <div className="collapse-content">
                <p>
                  Enjoy flexibility with a range of payment options, including
                  credit cards, debit cards, and various digital wallets. Tailor
                  your payment to suit your preferences.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Can I cancel my booking?
              </div>
              <div className="collapse-content">
                <p>
                  Absolutely! You can cancel your booking through our platform.
                  For detailed information on cancellation policies and any
                  associated charges, refer to our terms and conditions.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                How can I track my ride?
              </div>
              <div className="collapse-content">
                <p>
                  Stay in control of your journey by tracking your driver's
                  real-time location through our intuitive app. Experience peace
                  of mind and stay informed every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
