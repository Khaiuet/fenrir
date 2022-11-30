import { MegaphoneIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const TopHeader = () =>{
  return (
    <div className="relative bg-blue-900 px-4 py-3 pr-14 text-white">
      <p className="text-left text-sm font-medium sm:text-center">
        Cứ để đấy thôi khi nào có tiền thì làm.
        <a className="hover-underlined text-blue" href="">
          {" "}
          We're hiring  &rarr;{" "}
        </a>
      </p>
    </div>
  );
}
