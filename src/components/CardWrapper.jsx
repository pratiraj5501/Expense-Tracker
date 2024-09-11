import { useSelector } from "react-redux";
import { AiFillAndroid } from "react-icons/ai";
const CardWrapper = () => {
  const data = useSelector((state) => state.expense);
  // show by category
  const showByCategory = (data) => {
    const categories = {};
    data.forEach((item) => {
      const { category, amount } = item;
      if (!categories[category]) {
        categories[category] = {
          totalAmount: 0,
        };
      }
      categories[category].totalAmount += parseFloat(item.amount);
    });
    // convert the categories object into array for sorting
    const categoriesArray = Object.keys(categories).map((key) => ({
      category: key,
      ...categories[key],
    }));
    const sortedCategory = categoriesArray.sort(
      (a, b) => b.totalAmount - a.totalAmount
    );
    return sortedCategory;
  };
  const sortedCategory = showByCategory(data);
  console.log(sortedCategory);
  // if (sortedCategory[2] == null ? console.log("null") : console.log("no tnull"))
  return (
    <div className="card-wrapper">
      <div className="payment-card light-red">
        <div className="card-header">
          <div className="amount">
            <span className="title">
              {sortedCategory[0]?.category === undefined
                ? 0
                : sortedCategory[0]?.category}
            </span>
            <span className="amount-value">
              Rs.{sortedCategory[0].totalAmount}
            </span>
          </div>
          <i className="icon">
            <AiFillAndroid />
          </i>
        </div>
        <span className="card-detail">**** **** **** 3458</span>
      </div>
      <div className="payment-card light-purple">
        <div className="card-header">
          <div className="amount">
            <span className="title">{sortedCategory[1].category}</span>
            <span className="amount-value">
              Rs.{sortedCategory[1].totalAmount}
            </span>
          </div>
          <i className="icon dark-purple">
            <AiFillAndroid />
          </i>
        </div>
        <span className="card-detail">**** **** **** 5521</span>
      </div>
      <div className="payment-card light-green">
        <div className="card-header">
          <div className="amount">
            <span className="title">
              {sortedCategory[2]?.category === undefined ? (
                <span className="title">Add Expense</span>
              ) : (
                sortedCategory[2]?.category
              )}
            </span>
            <span className="amount-value">
              Rs.{" "}
              {sortedCategory[2]?.totalAmount === undefined
                ? 0
                : sortedCategory[2]?.totalAmount}
            </span>
          </div>
          <i className="icon dark-green">
            <AiFillAndroid />
          </i>
        </div>
        <span className="card-detail">**** **** **** 3458</span>
      </div>
      <div className="payment-card light-blue">
        <div className="card-header">
          <div className="amount">
            <span className="title">
              {sortedCategory[3]?.category === undefined ? (
                <span className="title">Add Expense</span>
              ) : (
                sortedCategory[3]?.category
              )}
            </span>
            <span className="amount-value">
              Rs.{" "}
              {sortedCategory[3]?.totalAmount === undefined
                ? 0
                : sortedCategory[3]?.totalAmount}
            </span>
          </div>
          <i className="dark-blue icon">
            <AiFillAndroid />
          </i>
        </div>
        <span className="card-detail">**** **** **** 3458</span>
      </div>
    </div>
  );
};
export default CardWrapper;
