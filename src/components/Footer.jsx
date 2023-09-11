

function Footer() {
  return (
    <footer className="w-full h-60 bg-black text-white ">
        <div className="flex flex-col justify-center items-center">
        <div className="flex gap-5 mt-10 mb-5 text-lg">
            <a className="hover:underline" href="/">Home</a>
            <a className="hover:underline" href="/store">Store</a>
            <a className="hover:underline" href="/menu">Menu</a>
        </div>
        <div className="text-center mb-5">
            <p className="text-3xl font-bold uppercase">Business Hours</p>
            <p>Open Daily</p>
            <p>11.00 - 21.00</p>
        </div>
        <div className="text-center">
            <p>Design with 🧡 by Alan Tanadi - LeCodingDev</p>
            <p>© 2023</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer