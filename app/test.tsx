// In your app file -- App
import { KkiapayProvider, useKkiapay } from "@kkiapay-org/react-native-sdk";
import { useEffect } from "react";
import { Button, View } from "react-native";

export default function Test() {
  return (
    <KkiapayProvider>
      <TestComponent />
    </KkiapayProvider>
  );
}

// In your component -- TestComponent

export function TestComponent() {
  const { openKkiapayWidget, addSuccessListener } = useKkiapay();

  useEffect(() => {
    addSuccessListener((data: { transactionId: string }) => {
      console.log("transactionId: ", data.transactionId);
    });
  }, []);

  const openWidget = () => {é
    openKkiapayWidget({
      amount: 10000,
      key: "94ae3f606eb811efa89fb507e973dd5c",
      sandbox: true,
      reason: "A reason",
    });
  };

  return (
    <View>
      <Button title="Pay now" onPress={openWidget} />
    </View>
  );
}
