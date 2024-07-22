import Image from "next/image";

/**
 * Adding loading effect to the app. see loading.io
 *
 */
export default function Loading() {
  return (
    <div className=" flex justify-center mt-18">
      <Image
        className="h-52"
        src="spinner.svg"
        width={200}
        height={200}
        alt="loading..."
      />
    </div>
  );
}
