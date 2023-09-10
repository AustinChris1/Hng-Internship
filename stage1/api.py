from flask import Flask, request, jsonify
import datetime

app = Flask(__name__)

@app.route('/api')
def api():
    slack_name = request.args.get('slack_name')
    track = request.args.get('track')

    # Calculate the current day of the week
    current_day = datetime.datetime.now().strftime('%A')

    # Calculate the current UTC time within +/-2 minutes
    utc_time = (datetime.datetime.utcnow() + datetime.timedelta(minutes=2)).strftime('%Y-%m-%dT%H:%M:%SZ')

    response = {
        'slack_name': slack_name,
        'current_day': current_day,
        'utc_time': utc_time,
        'track': track,
        'github_file_url': 'https://github.com/username/repo/blob/main/file_name.ext',
        'github_repo_url': 'https://github.com/username/repo',
        'status_code': 200
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
