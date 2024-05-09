export function shuffle(array) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array
  }

export default function Card({url, name, id, onClick}) {
    return (
        <div data-id={id} className="col-lg-2 col-md-4 col-sm-6 single--card mb-3">
            <div className="inner bg-light p-3 rounded" onClick={onClick}>
            <img src={url} alt={name} className="w-100 rounded" />
            <h3 className="mt-3 text-center galada text-dark">{name}</h3>
            </div>
        </div>
    )
}