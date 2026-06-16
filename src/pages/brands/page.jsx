import { createAsyncPage } from '@/lib/asyncPage';
import { getBrands } from "@/lib/db/catalog";
import { BrandsClientPage } from './BrandsClientPage';

export const metadata = {
  title: "Our Brands | Shreepathy & Co",
  description: "Explore the premium food ingredient brands we carry at Shreepathy & Co."
};

async function BrandsPage() {
  const brands = await getBrands();
  return <BrandsClientPage brands={brands} />;
}

export default createAsyncPage(BrandsPage);


