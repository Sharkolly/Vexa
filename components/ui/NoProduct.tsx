const NoProduct = ({category}: {category?: string} ) => {
  return (
    <div className='flex items-center justify-center h-[50vh] text-2xl font-medium text-slate-500'>
      No {category != 'All' && category} Product Found
    </div>
  )
};

export default NoProduct;
