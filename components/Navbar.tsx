import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (<>
        <div className="bg-slate-800 flex items-center justify-between py-3 px-8">
            <div>
                <Link href={'/'} >
                    <img className="rounded-full" src='https://user-images.githubusercontent.com/55911470/214786962-51be4929-05a4-489a-add4-79033c7fe037.png' width={'60'} height={'60'} alt="logo" />
                </Link>
            </div>
            <div>
                <Link href={'/add-topic'}>
                    <button className="bg-slate-600 text-white font-semibold p-4 rounded">Add Topic</button>
                </Link>
            </div>
        </div>
    </>);
}

export default Navbar;