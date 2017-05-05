export default function formatDate(date){
      var options = {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
      };
      var x = new Date(date);
      return x.toLocaleString("en-us", options);
}
