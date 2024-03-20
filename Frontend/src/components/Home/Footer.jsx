import 'boxicons';

export default function Footer() {
  return (
    <footer className="bg-gray-300 flex justify-around items-center p-4 bottom-0 left-0 w-full rounded-t-2xl">
      <box-icon name='home' color='#8B8B8B' size="md"></box-icon>
      <box-icon name='bell' color='#8B8B8B' size="md"></box-icon>
      <box-icon type='solid' name='phone' color='#8B8B8B' size="md"></box-icon>
      <box-icon type='solid' name='user' color='#8B8B8B' size="md"></box-icon>
    </footer>
  );
}
