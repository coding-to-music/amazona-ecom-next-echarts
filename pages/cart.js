import {
    Text,
    Flex,
    List,
    ListItem,
    Button,
    Alert,
    Link
} from "@chakra-ui/react";
import { useRouter } from 'next/router'
import NextLink from 'next/link';

import Page from '@/components/Page';
import DashboardShell from '@/components/DashboardShell';
import ProductTable from '@/components/ProductTable';
import { useCart } from '@/providers/cart';

const Cart = () => {
    const router = useRouter()
    const { cartItemsCount, cartTotal } = useCart()

    const handleSubmit = () => {
        if (process.browser) {
            let user = localStorage.getItem('user');
            if (user) router.push('/shipping')
            else router.push('/signin?redirect=shipping')
        }
    }

    return (
        <DashboardShell>
            <Text as="h1" color="secondary" textAlign="center" fontSize="4xl">
                Shopping Cart
            </Text>
            {
                cartItemsCount < 1 ? (
                    <Alert status="info">
                        Cart is empty.
                        <NextLink href="/products" passHref>
                            <Link ml={2}>
                                Go Shopping
                            </Link>
                        </NextLink>
                    </Alert>
                ) : (
                        <Flex
                            mt={2}
                            direction={["column", "column", "row"]}
                            maxW="90vw"
                        >
                            <ProductTable flex="auto" mb={4} />
                            <Flex
                                direction="column"
                                bg="gray.100"
                                rounded="md"
                                p={4}
                                h="9rem"
                                ml={[0, 0, 8]}
                                border="1px solid"
                                borderColor="gray.300"
                            >
                                <List mb={2}>
                                    <ListItem display="flex" fontWeight="bold" justifyContent="space-between" mb={1}>
                                        <Text>SubTotal ( items): </Text> <Text fontSize="lg">${cartTotal}</Text>
                                    </ListItem>
                                </List>
                                <Button
                                    bg="yellow.400"
                                    rounded="md"
                                    mt="auto"
                                    onClick={handleSubmit}
                                >
                                    Proceed To Checkout
                            </Button>
                            </Flex>
                        </Flex>
                    )
            }
        </DashboardShell>
    )
}

const CartPage = () => (
    <Page name="Cart" path="/cart">
        <Cart />
    </Page>
);

export default CartPage
