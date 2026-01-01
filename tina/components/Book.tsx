type Props = {
  img: string,
  imgAlt: string,
  imgClasses?: string,
  title: string,
  subtitle: string,
  href: string,
  review: string,
  reviewer: string,
  imgTinaField?: string,
  titleTinaField?: string,
  subtitleTinaField?: string,
  children: ReactNode;
};

export default function Book({ img, imgAlt, imgClasses, title, subtitle, href, review, reviewer, imgTinaField, titleTinaField, subtitleTinaField, children }: Props) {

  return (
    <div>
      <div className="md:flex md:gap-24 lg:gap-x-32">

        {/* Mobile */}
        <div className="text-center md:hidden">
          {
            href
              ? <a href={href} className=""><h2 data-tina-field={titleTinaField} className="text-3xl font-semibold hover:underline">{title}</h2></a> 
              : <h2 data-tina-field={titleTinaField} className="text-3xl font-semibold">{title}</h2>
          }
          <p data-tina-field={subtitleTinaField} className="mt-1 text-gray-800">{subtitle}</p>
        </div>

        <div className="mx-auto w-fit my-6 md:my-0 ">
          {
            href
              ? <a href={href}><img src={img} alt={imgAlt} data-tina-field={imgTinaField} className={`max-w-md h-96 rounded object-cover object-right hover:ring-2 hover:ring-sc-brown hover:shadow-lg ${imgClasses ? imgClasses : ''}`}/></a>
              : <img src={img} alt={imgAlt} data-tina-field={imgTinaField} className={`max-w-md h-96 rounded object-cover object-right ${imgClasses ? imgClasses : ''}`}/>
          }
        </div>

        <div className="max-w-2xl">
          <div className="hidden md:block">
            {
              href
                ? <a href={href}><h2 data-tina-field={titleTinaField} className="text-3xl font-semibold hover:underline">{title}</h2></a>
                : <h2 data-tina-field={titleTinaField} className="text-3xl font-semibold">{title}</h2>
            }
            <p data-tina-field={subtitleTinaField} className="mt-1 text-gray-800">{subtitle}</p>
          </div>
          <div className="mt-5">
            {children}
          </div>

          {
            (review && review) && 
              <div className="md:hidden lg:block mt-5 lg:mt-8 mx-auto max-w-xl">
                <p className="mt-5 text-center text-gray-800 font-semibold">{review}</p>
                <p className="mt-3 ml-8 max-w-xl">{reviewer}</p>
              </div>
          }

        </div>

      </div>

      {/* Desktop */}
      {
        (review && reviewer) &&
          <div className="hidden md:block lg:hidden mt-10 max-w-xl mx-auto">
            <p className="mt-5 text-center text-gray-800 font-semibold">{review}</p>
            <p className="mt-3 ml-8 max-w-xl">{reviewer}</p>
          </div>
      }

    </div>
  );

}
