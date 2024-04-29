export default function PropertyCard({ property }) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <img src={property.imageUrl} alt={property.imageAlt} />
      <div className="p-6">
        <h4>{property.title}</h4>
        <div>
          {property.beds} beds &bull; {property.baths} baths
        </div>
        <div>{property.formattedPrice} / wk</div>
        <div>
          {property.rating}/5 stars (based on {property.reviewCount})
        </div>
      </div>
    </div>
  );
}
