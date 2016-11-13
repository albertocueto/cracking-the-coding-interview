def arraySumAndProduct(list):
    sum  = 0
    product = 1
    for value in list:
        sum += value
    for value in list:
        product *= value
    return (sum, product)

list = []

for index in range(1, 10):
    list.append(index)

print(list)
print(arraySumAndProduct(list))


for index in range(1, 2000):
    list.append(index)

print(list)
print(arraySumAndProduct(list))
