# @param {Integer[]} values
# @return {Integer}
def max_score_sightseeing_pair(values)
    max_score = 0
    max_value_i = values[0] + 0
    
    (1...values.length).each do |j|
        max_score = [max_score, max_value_i + values[j] - j].max
        max_value_i = [max_value_i, values[j] + j].max
    end
    
    return max_score
end