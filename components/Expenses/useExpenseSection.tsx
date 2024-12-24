import { useEffect, useState } from "react";

import { ExpenseItemCardModel } from "../../utils/data/models";
import { expenseGetRequest } from "../../utils/client/requests";
import { transfromExpenseListDto } from "../../utils/data/transformers";

const useExpenseSectionForm = () => {
  const [expenseList, setExpenseList] = useState<Array<ExpenseItemCardModel>>(
    []
  );
  const [isLoading, setsIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setsIsLoading(true);
      try {
        const { message, success, data } = await expenseGetRequest();

        if (!success) {
          setsIsLoading(false);
          setMessage(message);
        }
        setExpenseList(transfromExpenseListDto(data));
      } catch (err: unknown) {
      } finally {
        setsIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    message,
    isLoading,
    expenseList,
  };
};

export default useExpenseSectionForm;
