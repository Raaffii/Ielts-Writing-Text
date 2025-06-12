export default function NavBar() {
  return (
    <nav class=' text-white p-4'>
      <div class='container mx-auto flex justify-between items-center'>
        <a href='/' class='text-xl font-bold'>
          Logo
        </a>
        <ul class='flex space-x-4'>
          <li>
            <a href='/about' class='hover:underline'>
              About
            </a>
          </li>
          <li>
            <a href='/services' class='hover:underline'>
              Services
            </a>
          </li>
          <li>
            <a href='/contact' class='hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
