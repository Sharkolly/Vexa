const NoProduct = ({category}: {category?: string} ) => {
  return (
    <div className='flex items-center capitalize justify-center h-[50vh] text-xl text-slate-500'>
      No {category != 'All' && category} Product Found
    </div>
  )
};

export default NoProduct;
