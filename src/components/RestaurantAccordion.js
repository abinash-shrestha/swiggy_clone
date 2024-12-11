import AccordionItem from './AccordionItem';

const RestaurantAccordion = ({ data }) => {
  //   console.log(data.title);
  return (
    <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-5 ">
      <div className="flex justify-between">
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      <AccordionItem items={data.itemCards} />
    </div>
  );
};

export default RestaurantAccordion;
