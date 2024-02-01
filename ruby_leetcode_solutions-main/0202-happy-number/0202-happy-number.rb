# @param {Integer} n
# @return {Boolean}
def is_happy(n)
  slow, fast = n, n
  begin
    slow = sum_of_squared_digits(slow)
    fast = sum_of_squared_digits(sum_of_squared_digits(fast))
  end while slow != fast

  return slow == 1
end

def sum_of_squared_digits(n)
 sum = 0
  while n != 0
    digit = n % 10
    sum += digit ** 2
    n /= 10 
  end
  return sum
end

