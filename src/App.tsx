import { useEffect, useState } from "react";
import { quotes } from "./components/quotes";

function App() {
  const [quote, setQuotes] = useState(() => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setQuotes(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 150000);
    return () => clearInterval(interval);
  }, []);

  // return (
  //   <>{ quote }</>
  // ); как у меня было, остальную обёртку и стили сгенерировал дипсик
  return(
    <div className="steampunk-container">
        <div className="steampunk-card">
          <div className="gear-left"></div>
          <div className="gear-right"></div>
          <div className="steampunk-quote">"{quote}"</div>
          <div className="steampunk-footer">
            <span className="cog-icon">⚙️</span> автоматическая смена каждые 15
            сек <span className="cog-icon">⚙️</span>
          </div>
        </div>
      </div>
  )
      
      
}

export default App;
