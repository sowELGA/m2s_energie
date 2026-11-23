export const pexels = (id, w = 600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export default function Pic({ id, alt, className = "" }) {
  if (!id) return null;
  return <img src={pexels(id)} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />;
}
