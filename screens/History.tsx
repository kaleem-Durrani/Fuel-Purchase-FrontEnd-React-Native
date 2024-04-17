import React from "react";
import { useEffect, useState } from "react";
import { View, FlatList, ImageBackground } from "react-native";
import {
  Box,
  GluestackUIProvider,
  Text,
  Divider,
  Center,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import HistoryCard from "../components/HistoryCard";
import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

// const sampleData = [
//   { id: 1, name: "John Doe", date: "2023-04-15" },
//   { id: 2, name: "Jane Smith", date: "2023-04-15" },
//   { id: 3, name: "John Doe", date: "2023-05-20" },
//   { id: 4, name: "Jane Smith", date: "2023-06-10" },
//   { id: 5, name: "John Doe", date: "2023-07-05" },
//   { id: 6, name: "Jane Smith", date: "2023-07-08" },
//   { id: 7, name: "John Doe", date: "2023-07-15" },
// ];

function History() {
  const [transactionsData, setTransactionsData] = useState([]);
  const supabaseUrl = "https://iufucultkitdqqbndjba.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1ZnVjdWx0a2l0ZHFxYm5kamJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5Mjk0MTMsImV4cCI6MjAxODUwNTQxM30.MSvyYGGSyJqvresUOLafAhtuf8Wu3C5SrpmEywf0gM4";
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to fetch transactions
  const fetchTransactions = async () => {
    try {
      // Fetch data from the "Transactions" table
      const { data, error } = await supabase
        .from("Transaction")
        .select("created_at, customer_name, amount, customer_id");

      if (error) {
        console.error("Error fetching data:", error.message);
        return;
      }

      // Update state with the fetched data
      setTransactionsData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  };

  useEffect(() => {
    // Call the fetchTransactions function
    fetchTransactions();
  }, [refresh]); // Empty dependency array ensures this effect runs only once on mount

  // useEffect(() => {
  //   async function fetchTransactions() {
  //     try {
  //       // Fetch data from the "Transactions" table
  //       const { data, error } = await supabase
  //         .from("Transaction")
  //         .select("created_at, customer_name, amount, customer_id");

  //       if (error) {
  //         console.error("Error fetching data:", error.message);
  //         return;
  //       }

  //       // Log the data in the console
  //       // console.log("Transactions data:", data);

  //       // Update state with the fetched data
  //       setTransactionsData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error.message);
  //     } finally {
  //       setLoading(false); // Set loading to false once data is fetched
  //     }
  //   }

  //   // Call the fetchTransactions function
  //   fetchTransactions();
  // }, [refresh]); // Empty dependency array ensures this effect runs only once on mount

  const handleAdd = async () => {
    try {
      // Generate random data for the new transaction
      const randomData = {
        created_at: new Date().toISOString(),
        customer_name: `RandomUser${Math.floor(Math.random() * 1000)}`,
        amount: Math.floor(Math.random() * 1000),
        customer_id: Math.floor(Math.random() * 100),
      };

      // Insert the new transaction into the "Transaction" table
      const { data, error } = await supabase
        .from("Transaction")
        .upsert([randomData]);

      if (error) {
        console.error("Error adding a random transaction:", error.message);
        return;
      }

      // Log the newly added transaction
      // console.log("Random transaction added:", data);
    } catch (error) {
      console.error("Error adding a random transaction:", error.message);
    }
    setRefresh(!refresh);
  };

  const handleDelete = async () => {
    try {
      // Sort transactions based on created_at timestamp
      const sortedTransactions = [...transactionsData].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );

      if (sortedTransactions.length > 0) {
        // Get the timestamp of the last transaction
        const lastTransactionTimestamp = sortedTransactions[0].created_at;

        // Delete the last transaction based on created_at timestamp
        const { data, error } = await supabase
          .from("Transaction")
          .delete()
          .eq("created_at", lastTransactionTimestamp);

        if (error) {
          console.error("Error deleting the last transaction:", error.message);
          return;
        }

        // Log the deleted transaction
        // console.log("Last transaction deleted:", data);

        // Fetch updated transactions after deleting the last one
        await fetchTransactions();
      } else {
        console.warn("No transactions to delete.");
      }
    } catch (error) {
      console.error("Error deleting the last transaction:", error.message);
    }
  };

  // const handleClear = async () => {
  //   try {
  //     // Delete all transactions by providing an always-true WHERE clause
  //     const { data, error } = await supabase
  //       .from("Transaction")
  //       .delete()
  //       .gt("id", 0); // Assuming "id" is a numeric column

  //     if (error) {
  //       console.error("Error deleting all transactions:", error.message);
  //       return;
  //     }

  //     // Log the deleted transactions
  //     // console.log("All transactions deleted:", data);

  //     // Fetch updated transactions after deleting all
  //     await fetchTransactions();
  //   } catch (error) {
  //     console.error("Error deleting all transactions:", error.message);
  //   }
  // };

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="cover"
      style={{ height: "100%" }}
    >
      <View style={styles.container}>
        <Button
          variant="outline"
          style={{
            maxWidth: "80%",
            alignSelf: "center",
            marginTop: "20%",
            minWidth: "80%",
          }}
          onPress={handleAdd}
        >
          <ButtonText>Add a random transaction</ButtonText>
        </Button>

        <Button
          action="negative"
          variant="outline"
          style={{
            maxWidth: "80%",
            alignSelf: "center",
            marginTop: "3%",
            minWidth: "80%",
            marginBottom: "5%",
          }}
          onPress={handleDelete}
        >
          <ButtonText>Delete Last Transaction</ButtonText>
        </Button>

        {/* <Button
          action="negative"
          variant="solid"
          style={{
            maxWidth: "70%",
            alignSelf: "center",
            marginTop: "3%",
            minWidth: "70%",
            marginBottom: "5%",
          }}
          onPress={handleClear}
        >
          <ButtonText>Clear All Transaction</ButtonText>
        </Button> */}

        {loading ? (
          <Text>Loading ......</Text>
        ) : transactionsData.length > 0 ? (
          <FlatList
            data={transactionsData}
            keyExtractor={(item) => item.created_at}
            renderItem={({ item }) => (
              <HistoryCard
                name={item.customer_name}
                id={item.customer_id}
                date={item.created_at}
                amount={item.amount}
              />
            )}
          />
        ) : (
          <Text>No transactions yet.</Text>
        )}
      </View>
    </ImageBackground>
  );
}

export default History;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginBottom: "50%",
  },
});
