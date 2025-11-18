import { BookMarked } from "lucide-react";

export default function Example() {
    return (
        <footer id="contact" className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 mt-25">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                    <div>
                        <a href="#" className="flex items-center gap-1">
                            <BookMarked className="size-6 text-gray-800"/><span className="text-gray-800 text-xl font-medium">CRF Pvt Ltd.</span>
                        </a>
                    </div>
                    <p className="mt-6 text-sm">
                        We simplify legal documentation, registration processes, and compliance formalities by providing reliable, transparent, and end-to-end support to individuals, organizations, and NRIs.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#about us">About us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+91-9966553310</p>
                            <p>Contact@crfportal.in</p>
                            <p>support@crfportal.in</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright {new Date().getFullYear()} © <a href="https://prebuiltui.com">CRF Pvt Ltd.</a>. All Right Reserved.
            </p>
        </footer>
    );
};