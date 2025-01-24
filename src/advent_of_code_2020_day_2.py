def meets_password_policy(password_and_policy):
    char_count_in_password = password_and_policy["password"].count(password_and_policy["char"])
    return password_and_policy["min"] <= char_count_in_password <= password_and_policy["max"]

def meets_new_password_policy(password_and_policy):
    first_position = password_and_policy["min"] - 1
    second_position = password_and_policy["max"] - 1
    char_in_first_position = password_and_policy["password"][first_position] == password_and_policy["char"]
    char_in_second_position = password_and_policy["password"][second_position] == password_and_policy["char"]
    return char_in_first_position ^ char_in_second_position

with open('input.txt', 'r') as file:
    split_input = file.read().split("\n")

def convert_to_password_and_policy_dict(line):
    password_and_policy_dict = {}
    parts = line.split()
    min_max = parts[0].split("-")
    password_and_policy_dict["min"] = int(min_max[0])
    password_and_policy_dict["max"] = int(min_max[1])
    password_and_policy_dict["char"] = parts[1][0]
    password_and_policy_dict["password"] = parts[2]
    return password_and_policy_dict

passwords_and_policies = [convert_to_password_and_policy_dict(line) for line in split_input]

# Part 1
valid_passwords = list(filter(meets_password_policy, passwords_and_policies))
print(f"Valid passwords (Part 1): {len(valid_passwords)}")

# Part 2
new_valid_passwords = list(filter(meets_new_password_policy, passwords_and_policies))
print(f"Valid passwords (Part 2): {len(new_valid_passwords)}")
