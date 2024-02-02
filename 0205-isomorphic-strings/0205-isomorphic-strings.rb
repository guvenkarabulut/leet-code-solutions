# @param {String} s
# @param {String} t
# @return {Boolean}
def is_isomorphic(s, t)
    return false if s.length != t.length
  s_map = {}
  t_map = {}
  s.length.times do |i|
    if s_map[s[i]].nil? && t_map[t[i]].nil?
      s_map[s[i]] = t[i]
      t_map[t[i]] = s[i]
    else
      return false if s_map[s[i]] != t[i] || t_map[t[i]] != s[i]
    end
  end
  return true
end