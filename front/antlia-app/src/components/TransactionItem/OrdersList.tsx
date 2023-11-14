import { Box, Text } from "native-base";
import React, { useEffect, useState } from "react";
import apiService from "../../utils/api";
import { Order } from "../../@types/order";
import { getCode } from "../../utils/uid-helper";

const colorTextSecondary = "#777777";

type OrdersListProps = {
  show: boolean;
  order_id: string;
};

function OrdersList({ show = false, order_id }: OrdersListProps) {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    apiService
      .get<Order>(`/orders/${order_id}`)
      .then((res) => setOrder(res.data));
  }, [order_id]);

  if (show) {
    return (
      <Box
        py="4"
        width="100%"
        alignItems="center"
        borderBottomColor="#ddd"
        borderBottomWidth={1}
        background="#fff"
      >
        <Box flexDir="row" width="100%" px={12}>
          <Text
            width={24}
            fontSize={12}
            lineHeight={20}
            color={colorTextSecondary}
            fontWeight="bold"
          >
            COD
          </Text>
          <Text
            flexGrow={1}
            fontSize={12}
            lineHeight={20}
            color={colorTextSecondary}
            fontWeight="bold"
          >
            PRODUTO
          </Text>
          <Text
            fontSize={12}
            lineHeight={20}
            px={5}
            color={colorTextSecondary}
            fontWeight="bold"
            width={20}
          >
            QTD
          </Text>
          <Text
            fontSize={12}
            lineHeight={20}
            color={colorTextSecondary}
            fontWeight="bold"
            width={20}
          >
            SUBTOTAL
          </Text>
        </Box>
        {order?.order_items?.map((order_item, index) => {
          return (
            <Box key={index} flexDir="row" width="100%" px={12}>
              <Text
                width={24}
                fontSize={12}
                lineHeight={20}
                color={colorTextSecondary}
                fontWeight="semibold"
              >
                {getCode(order_item.id)}
              </Text>
              <Text
                flexGrow={1}
                fontSize={12}
                lineHeight={20}
                color={colorTextSecondary}
                fontWeight="semibold"
              >
                {order_item.product_name}
              </Text>
              <Text
                fontSize={12}
                lineHeight={20}
                px={5}
                color={colorTextSecondary}
                fontWeight="semibold"
                width={20}
              >
                {order_item.quantity}
              </Text>
              <Text
                fontSize={12}
                lineHeight={20}
                color={colorTextSecondary}
                fontWeight="semibold"
                width={20}
              >
                R$ {order_item.subtotal.toFixed(2)}
              </Text>
            </Box>
          );
        })}
      </Box>
    );
  }

  return null;
}

export default OrdersList;
