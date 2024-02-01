# @param {Integer} n, a positive integer
# @return {Integer}
def reverse_bits(n)
    bits = n.digits(2)
    while bits.length < 32 do
        bits << 0
    end
    bits.join.to_i(2)
end