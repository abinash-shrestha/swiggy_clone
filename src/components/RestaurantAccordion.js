import AccordionItem from './AccordionItem';

const RestaurantAccordion = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-5 ">
      <div
        className="category-heading flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      {showItems && <AccordionItem items={data.itemCards} />}
    </div>
  );
};

export default RestaurantAccordion;
