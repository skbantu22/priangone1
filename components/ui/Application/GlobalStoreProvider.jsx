"use client";

import React, { Suspense } from "react";
import { Provider } from "react-redux"; // ✅ redux provider
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/store";
import Loading from "./Loading";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // ✅ QueryClient import
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // ✅ devtools import

const queryClient = new QueryClient();

export default function GlobalStoreProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          {children}
        </PersistGate>
      </Provider>

      {/* ✅ Devtools must be inside QueryClientProvider */}
      <Suspense fallback={null}>
        <ReactQueryDevtools initialIsOpen={false} />
      </Suspense>
    </QueryClientProvider>
  );
}
