export default function Pokemon({ id, name, attack, defense, speed, height, weitght, img, types}) {

  return (
    <>
      <div>
        <h3>{name}</h3>
        <img src={img} alt={name} />
        <ul>
          {Array.isArray(types) ? (
            types &&
            types.map((t) => {
              return <h4 key={t} >{t}</h4>;
            })
          ) : (
            <h4>{types}</h4>
          )}
        </ul>
      </div>
    </>
  );
}
