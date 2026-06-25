import { Alert, Button } from "react-native";
import RazorpayCheckout from "react-native-razorpay";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const openCheckout = () => {
    const options = {
      description: "Payment for Order",
      currency: "INR",
      key: "rzp_live_ulbX2nk9nN1K8x",
      amount: 10000, // ₹100.00 in paise
      name: "Demo App",
      prefill: {
        email: "test@example.com",
        contact: "9999999999",
        name: "Test User",
      },
      theme: {
        color: "#3399cc",
      },
      timeout: 300, // 5 minutes
      retry: {
        enabled: false,
      },
      back_button: false,
    };

    RazorpayCheckout.open(options)
      .then((data: any) => {
        Alert.alert("Success", `Payment ID: ${data.razorpay_payment_id}`);
      })
      .catch((error: any) => {
        Alert.alert("Failed", `${error.code} | ${error.description}`);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Pay Now" onPress={openCheckout} />
    </SafeAreaView>
  );
}
