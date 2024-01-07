# @param {String} column_title
# @return {Integer}
def title_to_number(column_title)
  value = Hash[ ('A'..'Z').map.with_index.to_a ]
  column_title.chars.inject(0){ |x,c| x*26 + value[c] + 1 }
end